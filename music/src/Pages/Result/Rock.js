import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { RockValueState } from '../../Components/CheckBox/RockBox';
import {
  ChakraProvider,
  VStack,
  HStack,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import ProgressBar from '@ramonak/react-progress-bar';

import {
  ProRockModalBody,
  HeavyRockModalBody,
  AlterRockModalBody,
  PunkRockModalBody,
  ShowRockModalBody,
} from '../../Components/modal/ModalContent';

import CommonModal from '../../Components/modal/Modal';
import Share from '../../Components/Share/Share';
import LazyImage from '../../Components/Image/LazyImage';
import './Result.css';

const Rock = () => {
  const RockValue = useRecoilValue(RockValueState);

  useEffect(() => {
    console.log(RockValue);
  }, [RockValue]);

  let Total = 0;
  let ProRock = 0;
  let HeavyRock = 0;
  let AlterRock = 0;
  let PunkRock = 0;
  let ShowRock = 0;

  for (const key in RockValue) {
    if (key === 'ProRock1' || key === 'ProRock2') {
      Total += RockValue[key];
      ProRock += RockValue[key];
    } else if (key === 'HeavyRock1' || key === 'HeavyRock2') {
      Total += RockValue[key];
      HeavyRock += RockValue[key];
    } else if (key === 'AlterRock1' || key === 'AlterRock2') {
      Total += RockValue[key];
      AlterRock += RockValue[key];
    } else if (key === 'PunkRock1' || key === 'PunkRock2') {
      Total += RockValue[key];
      PunkRock += RockValue[key];
    } else if (key === 'ShowRock1' || key === 'ShowRock2') {
      Total += RockValue[key];
      ShowRock += RockValue[key];
    }
  }

  ProRock = parseInt((ProRock / Total) * 100);
  HeavyRock = parseInt((HeavyRock / Total) * 100);
  AlterRock = parseInt((AlterRock / Total) * 100);
  PunkRock = parseInt((PunkRock / Total) * 100);
  ShowRock = parseInt((ShowRock / Total) * 100);

  const maxProgress = Math.max(
    ProRock,
    HeavyRock,
    AlterRock,
    PunkRock,
    ShowRock,
  );

  const {
    isOpen: isProRockOpen,
    onOpen: onProRockOpen,
    onClose: onProRockClose,
  } = useDisclosure();
  const {
    isOpen: isHeavyRockOpen,
    onOpen: onHeavyRockOpen,
    onClose: onHeavyRockClose,
  } = useDisclosure();
  const {
    isOpen: isAlterRockOpen,
    onOpen: onAlterRockOpen,
    onClose: onAlterRockClose,
  } = useDisclosure();
  const {
    isOpen: isPunkRockOpen,
    onOpen: onPunkRockOpen,
    onClose: onPunkRockClose,
  } = useDisclosure();
  const {
    isOpen: isShowRockOpen,
    onOpen: onShowRockOpen,
    onClose: onShowRockClose,
  } = useDisclosure();

  return (
    <ChakraProvider>
      <div className="body">
        <div className="Top">
          <h3>당신의 음악 Dopamine은</h3>
          <LazyImage src="/result/rock_result.webp" width="300" height="50" />
        </div>

        <div class="singer">
          <table>
            <tr>
              <td>
                <span>Progressive</span>
                <LazyImage src="/rock_singer1.webp" alt="Yes" />
                Yes
              </td>
              <td>
                <span>Hard</span>
                <LazyImage src="/rock_singer2.webp" alt="Guns N' Roses" />
                Guns N' Roses
              </td>
              <td>
                <span>Alternative</span>
                <LazyImage src="/rock_singer3.webp" alt="Nirvana" />
                Nirvana
              </td>
              <td>
                <span>Punk</span>
                <LazyImage src="/rock_singer4.webp" alt="Sex pistols" />
                Sex Pistols
              </td>
              <td>
                <span>Shoegaze</span>
                <LazyImage src="/rock_singer5.webp" alt="Slow dive" />
                Slow Dive
              </td>
            </tr>
          </table>
        </div>
        <div class="graph">
          <h2>
            현재 <span>나의 음악 DNA</span>분포도
          </h2>
        </div>
        <VStack
          spacing={3}
          align="stretch"
          marginLeft="300px"
          marginRight="335px"
          className="vstack-custom"
        >
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button className="Pro" onClick={onProRockOpen}>
                  프로그레시브
                </Button>
                <CommonModal
                  isOpen={isProRockOpen}
                  onClose={onProRockClose}
                  title="프로그레시브"
                >
                  <ProRockModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={ProRock === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={ProRock}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button
                  className="HeavyRock"
                  onClick={onHeavyRockOpen}
                  style={{ padding: '0px 44px' }}
                >
                  하드
                </Button>
                <CommonModal
                  isOpen={isHeavyRockOpen}
                  onClose={onHeavyRockClose}
                  title="헤비"
                >
                  <HeavyRockModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={HeavyRock === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={HeavyRock}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button
                  className="AlterRock"
                  onClick={onAlterRockOpen}
                  style={{ padding: '0px 23px' }}
                >
                  얼터너티브
                </Button>
                <CommonModal
                  isOpen={isAlterRockOpen}
                  onClose={onAlterRockClose}
                  title="얼터너티브"
                >
                  <AlterRockModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={AlterRock === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={AlterRock}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button
                  className="PunkRock"
                  onClick={onPunkRockOpen}
                  style={{ padding: '0px 44px' }}
                >
                  펑크
                </Button>
                <CommonModal
                  isOpen={isPunkRockOpen}
                  onClose={onPunkRockClose}
                  title="펑크"
                >
                  <PunkRockModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={PunkRock === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={PunkRock}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button
                  className="show"
                  onClick={onShowRockOpen}
                  style={{ padding: '0px 30px' }}
                >
                  슈게이징
                </Button>
                <CommonModal
                  isOpen={isShowRockOpen}
                  onClose={onShowRockClose}
                  title="슈게이징"
                >
                  <ShowRockModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={ShowRock === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={ShowRock}
                />
              </Box>
            </HStack>
          </Box>
        </VStack>

        <div className="ques">
          <h3>추천 플레이리스트 보기</h3>
        </div>
        <div class="musictable">
          <table>
            <tr>
              <hr />
              <td>
                <LazyImage src="/rock_m1.webp" id="albumcover" />
                <div id="song">
                  Owner of a Lonely Heart
                  <br />
                  <span>Yes</span>
                </div>
                <div class="play">
                  <LazyImage
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MZUIbKyS_2yQJ2JPZPSrzO0')
                    }
                    src="sound.webp"
                    id="m1"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
              <hr />
            </tr>
            <tr>
              <td>
                <LazyImage src="/rock_m2.webp" id="albumcover" />
                <div id="song">
                  Sweet Child O' Mine
                  <br />
                  <span>Guns N' Roses</span>
                </div>
                <div class="play">
                  <LazyImage
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MbI51oLrTl-9D9nhhKZk7CD')
                    }
                    src="sound.webp"
                    id="m2"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
            <tr>
              <td>
                <LazyImage src="/rock_m3.webp" id="albumcover" />
                <div id="song">
                  Smells Like Teen Spirit
                  <br />
                  <span>Nirvana</span>
                </div>
                <div class="play">
                  <LazyImage
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MbTbdOhM-X-OLPTs18AsV3s')
                    }
                    src="sound.webp"
                    id="m3"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
            <tr>
              <td>
                <LazyImage src="/rock_m4.webp" id="albumcover" />
                <div id="song">
                  God Save The Queen
                  <br />
                  <span>Sex Pistols</span>
                </div>
                <div class="play">
                  <LazyImage
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MbB05x1nVG1wAGYp9lyW_sZ')
                    }
                    src="sound.webp"
                    id="m4"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
            <tr>
              <td>
                <LazyImage src="/rock_m5.webp" id="albumcover" />
                <div id="song">
                  When the Sun Hits
                  <br />
                  <span>Slow Dive</span>
                </div>
                <div class="play">
                  <LazyImage
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MZ9gE5dJgB9lO_tbSNK6m59')
                    }
                    src="sound.webp"
                    id="m5"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
          </table>
        </div>
        <Share />
      </div>
    </ChakraProvider>
  );
};

export default Rock;
