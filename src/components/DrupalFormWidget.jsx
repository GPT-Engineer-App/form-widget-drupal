import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';

const DrupalFormWidget = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-endpoint-url.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Form submitted.',
          description: 'Your message has been sent successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: 'Submission error.',
        description: 'There was an error submitting your message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="email" isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormControl>
        <FormControl id="message" isRequired mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default DrupalFormWidget;