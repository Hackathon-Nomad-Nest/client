import { useCallback, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { FAQs } from 'src/lib/constants';
import { IFaq } from 'src/lib/types';

import Box from 'src/sharedComponents/Box';
import Input from 'src/sharedComponents/Input';
import TextField from 'src/sharedComponents/TextField';
import LoadingButton from 'src/sharedComponents/LoadingButton';
import Typography from 'src/sharedComponents/Typography';

import SupportImage from './support-page.jpg';
import { isValidEmail } from 'src/lib/helper';

export default function AccordionExpandIcon() {
  const [email, setEmail] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; query?: string }>({});

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors(prev => ({ ...prev, email: '' }));
  }, []);

  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setErrors(prev => ({ ...prev, query: '' }));
  }, []);

  const validateForm = useCallback(() => {
    let valid = true;
    const newErrors: { email?: string; query?: string } = {};

    if (!email || !isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!query) {
      newErrors.query = 'Please enter your query.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }, [email, query]);

  const handleSubmit = useCallback(async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const formData = {
        email,
        query,
      };
      console.log('formData', formData);
      // Simulate async request (e.g., send data to backend)
      setEmail('');
      setQuery('');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  }, [email, query, validateForm]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${SupportImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '250px',
        }}
      />
      <Box className="flex m-16" sx={{ gap: '1rem' }}>
        {/* FAQs */}
        <Box className="flex-column flex-1" sx={{ gap: '1rem' }}>
          {FAQs.map((faq: IFaq) => (
            <Box key={faq.question}>
              <Accordion>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Box>

        {/* Form - Input, Comment, Submit Button */}
        <Box className="flex-1 align-self-center" sx={{ marginX: '70px' }}>
          <Typography variant="h5" gutterBottom>
            Get In Touch
          </Typography>
          <Box className="flex-column" sx={{ gap: '1rem' }}>
            <Input
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
            <TextField
              placeholder="Enter your query"
              value={query}
              onChange={handleQueryChange}
              multiline
              rows={4}
              error={!!errors.query}
              helperText={errors.query}
              required
            />
            <LoadingButton
              label="Submit"
              type="submit"
              sx={{ width: 'fit-content' }}
              loading={loading}
              onClick={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
