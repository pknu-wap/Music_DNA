import React, { useEffect } from 'react';
import './Result.css';
import CommonModal from './Modal';

import ProgressBar from '@ramonak/react-progress-bar';
import {
  ChakraProvider,
  VStack,
  HStack,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { RbValueState } from '../../Components/RbBox';
import { useRecoilValue } from 'recoil';
import {
  NeoRbModalBody,
  ComtemRbModalBody,
  PunkRbModalBody,
  SoulRbModalBody,
  AlterRbModalBody,
} from './ModalCon';

import Share from '../../Components/Share';

const Rb = () => {
  const RbValue = useRecoilValue(RbValueState);

  useEffect(() => {
    console.log(RbValue);
  }, [RbValue]);

  let Total = 0;
  let NeoRb = 0;
  let ComtemRb = 0;
  let PunkRb = 0;
  let SoulRb = 0;
  let AlterRb = 0;

  for (const key in RbValue) {
    if (key === 'NeoRB1' || key === 'NeoRB2') {
      Total += RbValue[key];
      NeoRb += RbValue[key];
    } else if (key === 'ComRB1' || key === 'ComRB2') {
      Total += RbValue[key];
      ComtemRb += RbValue[key];
    } else if (key === 'SoulRB1' || key === 'SoulRB2') {
      Total += RbValue[key];
      SoulRb += RbValue[key];
    } else if (key === 'PunkRB1' || key === 'PunkRB2') {
      Total += RbValue[key];
      PunkRb += RbValue[key];
    } else if (key === 'AlterRB1' || key === 'AlterRB2') {
      Total += RbValue[key];
      AlterRb += RbValue[key];
    }
  }

  NeoRb = parseInt((NeoRb / Total) * 100);
  ComtemRb = parseInt((ComtemRb / Total) * 100);
  PunkRb = parseInt((PunkRb / Total) * 100);
  SoulRb = parseInt((SoulRb / Total) * 100);
  AlterRb = parseInt((AlterRb / Total) * 100);

  const maxProgress = Math.max(NeoRb, ComtemRb, PunkRb, SoulRb, AlterRb);

  const {
    isOpen: isNeoRbOpen,
    onOpen: onNeoRbOpen,
    onClose: onNeoRbClose,
  } = useDisclosure();
  const {
    isOpen: isComtemRbOpen,
    onOpen: onComtemRbOpen,
    onClose: onComtemRbClose,
  } = useDisclosure();
  const {
    isOpen: isPunkRbOpen,
    onOpen: onPunkRbOpen,
    onClose: onPunkRbClose,
  } = useDisclosure();
  const {
    isOpen: isSoulRbOpen,
    onOpen: onSoulRbOpen,
    onClose: onSoulRbClose,
  } = useDisclosure();
  const {
    isOpen: isAlterRbOpen,
    onOpen: onAlterRbOpen,
    onClose: onAlterRbClose,
  } = useDisclosure();

  return (
    <ChakraProvider>
      <div className="body">
        <div className="Top">
          <h3>당신의 음악 DNA는</h3>
          <h2>
            '<span>R&B</span>' 에 가깝군요!
          </h2>
        </div>
        <br />

        <div class="singer">
          <table>
            <tr>
              <td>
                <span>Neo Soul</span>
                <img src="/rb_singer1.png" alt="D'Angelo" />
                D'Angelo
              </td>
              <td>
                <span>Contemporary</span>
                <img src="/rb_singer2.png" alt="SZA" />
                Beyoncé
              </td>
              <td>
                <span>Funk</span>
                <img src="/rb_singer3.png" alt="Michael Jackson" />
                James Brown
              </td>
              <td>
                <span>Soul</span>
                <img src="/rb_singer4.png" alt="Stevie Wonder" />
                Stevie Wonder
              </td>
              <td>
                <span>Alternative</span>
                <img src="/rb_singer5.png" alt="Frank ocean" />
                Frank Ocean
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
                <Button onClick={onNeoRbOpen} style={{ padding: '0px 37px' }}>
                  네오
                </Button>
                <CommonModal
                  isOpen={isNeoRbOpen}
                  onClose={onNeoRbClose}
                  title="네오"
                >
                  <NeoRbModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={NeoRb === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={NeoRb}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button className="ComRB" onClick={onComtemRbOpen}>
                  컨템포러리
                </Button>
                <CommonModal
                  isOpen={isComtemRbOpen}
                  onClose={onComtemRbClose}
                  title="컨템포러리"
                >
                  <ComtemRbModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={ComtemRb === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={ComtemRb}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button onClick={onPunkRbOpen} style={{ padding: '0px 37px' }}>
                  펑크
                </Button>
                <CommonModal
                  isOpen={isPunkRbOpen}
                  onClose={onPunkRbClose}
                  title="펑크"
                >
                  <PunkRbModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={PunkRb === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={PunkRb}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button onClick={onSoulRbOpen} style={{ padding: '0px 37px' }}>
                  소울
                </Button>
                <CommonModal
                  isOpen={isSoulRbOpen}
                  onClose={onSoulRbClose}
                  title="소울"
                >
                  <SoulRbModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={SoulRb === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={SoulRb}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button className="AlterRB" onClick={onAlterRbOpen}>
                  얼터너티브
                </Button>
                <CommonModal
                  isOpen={isAlterRbOpen}
                  onClose={onAlterRbClose}
                  title="얼터너티브"
                >
                  <AlterRbModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={AlterRb === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={AlterRb}
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
                <img src="rb_m1.jpg" id="albumcover" />
                <div id="song">
                  Brown Sugar
                  <br />
                  <span>D'Angelo</span>
                </div>
                <img src="19.png" id="prohibit1" />
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MYDejvhbWZoWsq6gd1ttD20')
                    }
                    src="sound1.png"
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
                <img src="/rb_m2.jpg" id="albumcover" />
                <div id="song">
                  Crazy In Love
                  <br />
                  <span>Beyoncé</span>
                </div>
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MY2BZBQY_JBa2N6FraJL0su')
                    }
                    src="/sound1.png"
                    id="m2"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
            <tr>
              <td>
                <img src="/rb_m3.jpeg" id="albumcover" />
                <div id="song">
                  {' '}
                  I Got You
                  <br />
                  <span>James Brown</span>
                </div>
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MYyy_jgPMM_gkmG3LJgdJ_G')
                    }
                    src="sound1.png"
                    id="m3"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
            <tr>
              <td>
                <img src="/rb_m4.jpg" id="albumcover" />
                <div id="song">
                  You Send Me
                  <br />
                  <span>Stevie Wonder</span>
                </div>
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MZyhmm-4g_T2xdeSrQJ6r0O')
                    }
                    src="sound1.png"
                    id="m4"
                  />
                  <span>play</span>
                </div>
              </td>
              <hr />
            </tr>
            <tr>
              <td>
                <img src="/rb_m5.jpg" id="albumcover" />
                <div id="song">
                  Self Control
                  <br />
                  <span>Frank Ocean</span>
                </div>
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MblTfvFXrghM3DHYXyAkiG0')
                    }
                    src="sound1.png"
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

export default Rb;
