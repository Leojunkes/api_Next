import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Input,
  Stack,
} from '@chakra-ui/react';

export default function Calculos() {
  const x = 1000;
  const y = 0.008;

  const a = 1;
  const totalMes1 = x * y + x;
  const totalMes2 = totalMes1 * y + totalMes1;
  const totalMes3 = totalMes2 * y + totalMes2;

  return (
    <Flex>
      <Table>
        <Thead>
          <Tr>
            <Th>valor mensal</Th>
            <Th>12 meses</Th>
            <Th>taxa ao mês</Th>
            <Th>total Mês</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>{x}</Td>
            <Td>{a}</Td>
            <Td>{y}</Td>

            <Td>{totalMes1}</Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td>{x}</Td>
            <Td>{a + 1}</Td>
            <Td>{y}</Td>

            <Td>{totalMes2}</Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td>{x}</Td>
            <Td>{a + 2}</Td>
            <Td>{y}</Td>

            <Td>{totalMes3}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
}
