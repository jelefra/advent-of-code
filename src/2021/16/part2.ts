// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/16/input.txt')[0];

const hexToBinary = {
  0: '0000',
  1: '0001',
  2: '0010',
  3: '0011',
  4: '0100',
  5: '0101',
  6: '0110',
  7: '0111',
  8: '1000',
  9: '1001',
  A: '1010',
  B: '1011',
  C: '1100',
  D: '1101',
  E: '1110',
  F: '1111',
};

const convertToBinary = (hex) =>
  [...hex].map((value) => hexToBinary[value]).join('');

type Packet = { value?: number; typeId: number; subPackets: Packet[] };

const parsePacket = (bits): { packet: Packet; bits: string } => {
  // Remove version bits
  bits.splice(0, 3);
  const typeId = parseInt(bits.splice(0, 3).join(''), 2);

  // Literal value packet
  if (typeId === 4) {
    let binary = '';
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const group = bits.splice(0, 5);
      binary += group.slice(1).join('');
      if (group[0] === '0') {
        break;
      }
    }
    const value = parseInt(binary, 2);
    return { packet: { typeId: 4, subPackets: [], value }, bits };
  }

  // Operator packet
  const lengthTypeId = bits.splice(0, 1)[0];
  const subPackets = [];

  if (lengthTypeId === '0') {
    const subPacketsLength = parseInt(bits.splice(0, 15).join(''), 2);
    let subPacketsContent = bits.splice(0, subPacketsLength);
    while (subPacketsContent.length) {
      const { packet, bits: remainder } = parsePacket(subPacketsContent);
      subPackets.push(packet);
      subPacketsContent = remainder;
    }
  }

  if (lengthTypeId === '1') {
    const subPacketsCount = parseInt(bits.splice(0, 11).join(''), 2);
    for (let i = 0; i < subPacketsCount; i++) {
      const { packet, bits: remainder } = parsePacket(bits);
      subPackets.push(packet);
      bits = remainder;
    }
  }

  return { packet: { typeId, subPackets }, bits };
};

const operators = {
  0: (values) => values.reduce((sum, value) => sum + value, 0),
  1: (values) => values.reduce((product, value) => product * value, 1),
  2: (values) => Math.min(...values),
  3: (values) => Math.max(...values),
  5: ([a, b]) => (a > b ? 1 : 0),
  6: ([a, b]) => (a < b ? 1 : 0),
  7: ([a, b]) => (a === b ? 1 : 0),
};

const calculate = ({ typeId, subPackets }) =>
  operators[typeId](
    subPackets.map((subPacket) =>
      subPacket.subPackets?.length ? calculate(subPacket) : subPacket.value
    )
  );

const part2 = (transmission = input) => {
  const binary = convertToBinary(transmission).split('');
  const { packet } = parsePacket(binary);
  return calculate(packet);
};
// console.log('Part 2: ', time(part2));
// 0.70 ms

export default part2;
