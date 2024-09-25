/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { getPlanById } from 'src/api/plan';
import { useParams } from 'react-router-dom';

const MAP_ANIMATED = () => {
  const mapContainerRef = useRef<any>();
  const mapRef = useRef<any>();
  const [newCoordinates, setNewCoordinates] = useState<[number, number][]>();
  const [planData, setPlanData] = useState<any>({});
  const { id } = useParams<string>();

  // new cordinates must be in this type that is of [number, number][]
  // let tempCoordinates = [
  //   [74.8723, 31.634], // Amritsar
  //   [75.8577, 30.9009], // Ludhiana
  //   [76.7794, 30.7333], // Chandigarh
  //   [77.1025, 28.7041], // Delhi
  //   [77.6762, 27.2173], // Mathura
  //   [78.0322, 27.1767], // Agra
  //   [78.3992, 26.4499], // Gwalior
  //   [75.8069, 26.9124], // Jaipur
  //   [75.7804, 23.1725], // Kota
  //   [74.6299, 20.9374], // Dhule
  //   [79.0193, 21.1458], // Nagpur
  //   [77.1892, 23.3441], // Jabalpur
  //   [78.566, 25.4358], // Jhansi
  //   [77.4126, 23.2599], // Bhopal
  //   [75.8577, 22.7196], // Indore
  //   [75.7873, 23.2042], // Ujjain
  //   [73.8567, 18.5204], // Pune
  //   [77.209, 22.3072], // Nagpur
  //   [77.5946, 12.9716], // Bengaluru
  //   [78.7047, 10.7905], // Chennai
  //   [76.9366, 8.5241], // Thiruvananthapuram
  //   [77.5385, 8.0883], // Kanyakumari
  //   [77.3707, 10.0051], // Madurai
  //   [77.6053, 8.1889],
  // ];
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic3VwZXJzdGFuIiwiYSI6ImNtMTBzMGlxNjBrYncyaXM0b21wdTBva3UifQ.C50qt-gDQPTnk8xi7ZoDFw';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [74.8723, 31.634],
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 0,
    });

    mapRef.current.on('load', async () => {
      const data = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: newCoordinates, // new coordinates will be put here from api
              // coordinates: tempCoordinates,
            },
          },
        ],
      };
      const coordinates = data.features[0].geometry.coordinates ?? [];

      data.features[0].geometry.coordinates = [coordinates[0]];

      mapRef.current.addSource('trace', { type: 'geojson', data: data });
      mapRef.current.addLayer({
        id: 'trace',
        type: 'line',
        source: 'trace',
        paint: {
          'line-color': 'red',
          'line-opacity': 0.75,
          'line-width': 5,
        },
      });

      mapRef.current.jumpTo({ center: coordinates[0], zoom: 6 });
      mapRef.current.setPitch(30);

      let i = 0;
      const timer = setInterval(() => {
        if (i < coordinates.length) {
          data?.features[0]?.geometry?.coordinates?.push(coordinates[i]);
          mapRef.current.getSource('trace').setData(data);
          mapRef.current.panTo(coordinates[i]);
          i++;
        } else {
          window.clearInterval(timer);
        }
      }, 1000);
    });
  }, []);

  //details will be fetched here for plan summary which include coordinates as well
  const fetchPlanDetails = useCallback(async (id: string) => {
    try {
      const planResponse = await getPlanById(id);
      if (planResponse?.response) {
        setPlanData(planResponse.response);
      }
    } catch (error) {
      console.error('Failed to fetch plan details', error);
    }
  }, []);

  interface TravelPlan {
    [key: string]: {
      [key: string]: {
        location_latitude?: string;
        location_longitude?: string;
      };
    };
  }

  //this funciton will extract corrdinates from the data and will return an aray of corrdinates in desired format
  const extractCoordinates = (travelPlan: TravelPlan): [number, number][] => {
    const coordinates: [number, number][] = [];

    Object.keys(travelPlan).forEach((day) => {
      Object.values(travelPlan[day]).forEach((activity) => {
        if (activity.location_latitude && activity.location_longitude) {
          coordinates.push([parseFloat(activity.location_longitude), parseFloat(activity.location_latitude)]);
        }
      });
    });

    return coordinates;
  };

  useEffect(() => {
    fetchPlanDetails(`${id}`);
    const cord = extractCoordinates(planData);
    setNewCoordinates(cord);
  }, []);
  console.log('newCoordinates', newCoordinates);
  return (
    <>
      <div className='bg-neutral-100'>
        <div className='max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center border-1px glass p-5'>
            {/* <!-- List --> */}
            {/* this div will be inside a map containing the summary data for the trip which includes all the destinations user is going to be */}
            <div className='space-y-3'>
              <dl className='flex flex-col sm:flex-row gap-1'>
                <dt className='min-w-40'>
                  <span className='block text-sm text-gray-500'>Summary</span>
                </dt>
                <dd>
                  <ul>
                    <li className='me-1 inline-flex items-center text-sm text-gray-800'>{}</li>
                    <li className='me-1 inline-flex items-center text-sm text-gray-800'>Details</li>
                  </ul>
                </dd>
              </dl>
            </div>
            {/* <!-- End List --> */}
            <div className='aspect-w-16 aspect-h-9 lg:aspect-none h-80'>
              {/* <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" /> */}
              <div ref={mapContainerRef} id='map' className='h-full w-full'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MAP_ANIMATED;
