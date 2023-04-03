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
  // For reference: (value) => parseInt(value, 16).toString(2).padStart(4, '0')
  [...hex].map((value) => hexToBinary[value]).join('');

const parsePacket = (bits) => {
  const version = parseInt(bits.splice(0, 3).join(''), 2);
  const typeId = parseInt(bits.splice(0, 3).join(''), 2);

  // Literal value packet
  if (typeId === 4) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const group = bits.splice(0, 5);
      if (group[0] === '0') {
        break;
      }
    }
    return { packet: { version }, bits };
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

  return { packet: { version, subPackets }, bits };
};

const sumVersions = ({ version, subPackets = [] }) =>
  version +
  subPackets.reduce((sum, subPacket) => sum + sumVersions(subPacket), 0);

const part1 = (transmission = input) => {
  const binary = convertToBinary(transmission).split('');
  const { packet } = parsePacket(binary);
  return sumVersions(packet);
};
// console.log('Part 1: ', time(part1));
// 0.64 ms

export default part1;
