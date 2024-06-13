import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Spinner, useToast } from '@chakra-ui/react';

const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('https://your-endpoint-url.com/submissions');
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        } else {
          throw new Error('Failed to fetch submissions');
        }
      } catch (error) {
        toast({
          title: 'Error fetching submissions.',
          description: 'There was an error fetching the form submissions.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [toast]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          {submissions.map((submission, index) => (
            <Tr key={index}>
              <Td>{submission.name}</Td>
              <Td>{submission.email}</Td>
              <Td>{submission.message}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdminSubmissions;