/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import {property} from '../componentes/propertyTest.js';
import {
  Grid,
  Box,
  Badge,
  Button,
  Flex,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const fotosLeo = [
  { id: 1, imagem: '/imagens/leoDoc.jpg', title: 'Documentos Leo' },
  { id: 2, imagem: '/imagens/leodoc1.jpg', title: 'Documentos Leo' },
  { id: 3, imagem: '/imagens/sangueleo.jpg', title: 'Documentos Leo' },
  { id: 4, imagem: '/imagens/vacinaleo.jpg', title: 'Documentos Leo' },
  { id: 5, imagem: '/imagens/gallmont.png', title: 'Documentos Leo' },
  { id: 6, imagem: '/imagens/artenoMuro.jpg', title: 'Documentos Leo' },
  { id: 7, imagem: '/imagens/oculosLeo.jpg', title: 'Documentos Leo' },
];

export default function Fotos() {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="22px" position='absolute' left='2'top='11rem'><b>Fotos Documentos Leo</b></Text>
      <Flex>
        {property.map((property, key) => (
          <Box
            key={key}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Flex>
              <img src={property.imageUrl} alt={property.imageAlt} />
            </Flex>

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        )
        {/* {totalLeo.map((f, key) => (
          <img key={key} style={{ width: '10rem' }} src={f.imagem} alt="leo" />
        ))} */}
      </Flex>
    </Flex>
  );
}
