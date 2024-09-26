import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl, { LngLatLike, Marker } from 'mapbox-gl';
import { getPlanById } from 'src/api/plan';
import { useParams } from 'react-router-dom';
import { IDayPlan, ITrip } from 'src/model/trip';

const GOOGLE_MAP_ACCESS_KEY = import.meta.env.VITE_MAP_ACCESS_KEY;

const MAP_ANIMATED = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | any>(null);
  const [newCoordinates, setNewCoordinates] = useState<[number, number][]>();
  const [planData, setPlanData] = useState<ITrip>();
  const { id } = useParams();

  useEffect(() => {
    if (newCoordinates && mapContainerRef.current) {
      mapboxgl.accessToken = GOOGLE_MAP_ACCESS_KEY;

      // Initialize map only if it's not already initialized
      if (!mapRef.current) {
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          center: newCoordinates[0],
          style: 'mapbox://styles/mapbox/streets-v12',
          zoom: 12,
        });

        mapRef.current.on('load', () => {

          const data: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
            type: 'FeatureCollection', // Correct the type
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'LineString',
                  coordinates: newCoordinates,
                },
                properties: {}, // Optional properties, must be defined even if empty
              },
            ],
          };

          const coordinates = data.features[0].geometry.coordinates ?? [];
          data.features[0].geometry.coordinates = [coordinates[0]];

          mapRef.current?.addSource('trace', { type: 'geojson', data });
          mapRef.current?.addLayer({
            id: 'trace',
            type: 'line',
            source: 'trace',
            paint: {
              'line-color': 'red',
              'line-opacity': 0.75,
              'line-width': 5,
              'line-dasharray': [2, 2],
            },
          });
          mapRef.current?.flyTo({ center: coordinates[0] as LngLatLike, zoom: 12 });
          mapRef.current?.setPitch(30);
          let i = 0;
          const timer = setInterval(() => {
            if (i < coordinates.length) {
              data.features[0].geometry.coordinates.push(coordinates[i]);
              const geojsonSource = mapRef.current?.getSource('trace') as mapboxgl.GeoJSONSource;
              if (geojsonSource) {
                geojsonSource.setData(data);
              }
              // new mapboxgl.Marker({})?.setLngLat([74.8723, 31.634]).addTo(mapRef.current);
              mapRef?.current.flyTo({center: coordinates[i], essential: true, zoom: 12})
              // mapRef.current?.panTo(coordinates[i] as LngLatLike);
              i++;
            } else {
              clearInterval(timer);
            }
          }, 1400);
        });
      }
    }
  }, [newCoordinates]);

  const fetchPlanDetails = useCallback(async (planId: string) => {
    try {
      const planResponse = await getPlanById(planId);
      if (planResponse?.response) {
        setPlanData(planResponse.response);
      }
    } catch (error) {
      console.error('Failed to fetch plan details', error);
    }
  }, []);

  const extractCoordinates = (travelPlan: Record<string, IDayPlan>): [number, number][] => {
    const coordinates: [number, number][] = [];
    console.log('travelPlan', travelPlan)
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
    if (id) {
      fetchPlanDetails(id);
    }
  }, [id, fetchPlanDetails]);

  useEffect(() => {
    if (planData) {
      console.log('planData', planData)
      const coordinates = extractCoordinates(planData.travel_plan);
      console.log('coordinates',coordinates)
      setNewCoordinates(coordinates);
    }
  }, [planData]);

  return (
    <div className='bg-neutral-100'>
      <div className='max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto'>
        <div className='gap-10 lg:gap-16 lg:items-center p-5'>
          {/* Summary or other details */}
          <div className='space-y-3'>
            <dl className='flex flex-col sm:flex-row gap-1'>
              <dt className='min-w-40'>
                <span className='block text-sm text-gray-500'>Summary</span>
              </dt>
              <dd>
                <ul>
                  <li className='me-1 inline-flex items-center text-sm text-gray-800'>Details</li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* Map */}
          <div className='lg:h-[500px] w-full'>
            <div ref={mapContainerRef} id='map' className='h-full w-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAP_ANIMATED;
