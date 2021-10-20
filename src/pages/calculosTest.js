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
  //JUROS SIMPLES FÓRMULA => j=c * i * t   j=juros | c=capital | i=taxa | t=tempo

  //JUROS ACUMULADOS/COMPOSTO FÓRMULA => j=c*[(1+i)²-1]

  const capitalMes = 100;
  const taxa = 0.08;
  const tempoMes = 120;

  const jurosSimples = 100 * 0.01 * 12;
  const totalSimples = 100 * 12

  

  const expo = Math.pow(1 + 0.01, 12); //mes a mes taxa
  const totalExpo = expo * 12;
  // console.log(totalExpo.toFixed(2));

  console.log(expo.toFixed(2));
  // console.log(x);

  const jurosCompostos = 100 * [expo - 1];
  console.log(jurosCompostos.toFixed(2));
  const jurosmaisValor = jurosCompostos + capitalMes;
  // console.log(jurosmaisValor.toFixed(2));

  return (
    <Flex>
      <Table>
        <Thead>
          <Tr>
            <Th>taxa ao mês</Th>

            <Th>total Mês(juros simples)</Th>
            <Th>Juros Mês(composto)</Th>
            <Th>Juros Simples</Th>
            <Th>Juros Compostos</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td></Td>
            <Td>{totalSimples}</Td>
            <Td></Td>
            <Td>{jurosSimples}</Td>
            <Td>{jurosCompostos.toFixed(2)}</Td>
            <Td></Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>

            <Td></Td>
          </Tr>
        </Tbody>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>

            <Td></Td>
          </Tr>
        </Tbody>
        <Button type="button" onClick="">
          calcular
        </Button>
      </Table>
    </Flex>
  );
}
