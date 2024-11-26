import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { HipValueState } from '../../Components/CheckBox/HipBox';
import ProgressBar from '@ramonak/react-progress-bar';
import {
  ChakraProvider,
  VStack,
  HStack,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import {
  DrillHipModalBody,
  TrapHipModalBody,
  AlterHipModalBody,
  RageHipModalBody,
  BoomHipModalBody,
} from '../../Components/modal/ModalContent';

import Share from '../../Components/Share/Share';
import CommonModal from '../../Components/modal/Modal';
import './Result.css';

const Hip = () => {
  const HipValue = useRecoilValue(HipValueState);

  useEffect(() => {
    console.log(HipValue);
  }, [HipValue]);

  let Total = 0;
  let DrillHip = 0;
  let TrapHip = 0;
  let AlterHip = 0;
  let RageHip = 0;
  let BoomHip = 0;

  for (const key in HipValue) {
    if (key === 'DrillHip1' || key === 'DrillHip2') {
      Total += HipValue[key];
      DrillHip += HipValue[key];
    } else if (key === 'TrapHip1' || key === 'TrapHip2') {
      Total += HipValue[key];
      TrapHip += HipValue[key];
    } else if (key === 'AlterHip1' || key === 'AlterHip2') {
      Total += HipValue[key];
      AlterHip += HipValue[key];
    } else if (key === 'RageHip1' || key === 'RageHip2') {
      Total += HipValue[key];
      RageHip += HipValue[key];
    } else if (key === 'BoomHip1' || key === 'BoomHip2') {
      Total += HipValue[key];
      BoomHip += HipValue[key];
    }
  }

  DrillHip = parseInt((DrillHip / Total) * 100);
  TrapHip = parseInt((TrapHip / Total) * 100);
  AlterHip = parseInt((AlterHip / Total) * 100);
  RageHip = parseInt((RageHip / Total) * 100);
  BoomHip = parseInt((BoomHip / Total) * 100);

  const maxProgress = Math.max(DrillHip, TrapHip, AlterHip, RageHip, BoomHip);

  const {
    isOpen: isDrillHipOpen,
    onOpen: onDrillHipOpen,
    onClose: onDrillHipClose,
  } = useDisclosure();
  const {
    isOpen: isTrapHipOpen,
    onOpen: onTrapHipOpen,
    onClose: onTrapHipClose,
  } = useDisclosure();
  const {
    isOpen: isAlterHipOpen,
    onOpen: onAlterHipOpen,
    onClose: onAlterHipClose,
  } = useDisclosure();
  const {
    isOpen: isRageHipOpen,
    onOpen: onRageHipOpen,
    onClose: onRageHipClose,
  } = useDisclosure();
  const {
    isOpen: isBoomHipOpen,
    onOpen: onBoomHipOpen,
    onClose: onBoomHipClose,
  } = useDisclosure();

  return (
    <ChakraProvider>
      <div className="body">
        <div className="Top">
          <img src="/result/hiphop_result.png" width="300" height="50" />
          <h3>당신의 음악 DNA는</h3>
          <h2>
            '<span>Hiphop</span>' 에 가깝군요!
          </h2>
        </div>
        <br />
        <div class="singer">
          <table>
            <tr>
              <td>
                <span>Drill</span>
                <img src="/hip_singer1.png" alt="Pop Smoke" />
                Pop Smoke
              </td>
              <td>
                <span>Trap</span>
                <img src="/hip_singer2.png" alt="Future" />
                Future
              </td>
              <td>
                <span>Alternative</span>
                <img src="/hip_singer3.png" alt="Kanye west(Ye)" />
                Kanye West
              </td>
              <td>
                <span>Rage</span>
                <img src="/hip_singer4.png" alt="Trippie Redd" />
                Trippie Redd
              </td>
              <td>
                <span>Boom Bap</span>
                <img src="/hip_singer5.png" alt="B.I.G." />
                B.I.G.
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
                <Button
                  onClick={onDrillHipOpen}
                  style={{ padding: '0px 37px' }}
                >
                  드릴
                </Button>
                <CommonModal
                  isOpen={isDrillHipOpen}
                  onClose={onDrillHipClose}
                  title="드릴"
                >
                  <DrillHipModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={DrillHip === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={DrillHip}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button onClick={onTrapHipOpen} style={{ padding: '0px 37px' }}>
                  트랩
                </Button>
                <CommonModal
                  isOpen={isTrapHipOpen}
                  onClose={onTrapHipClose}
                  title="트랩"
                >
                  <TrapHipModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={TrapHip === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={TrapHip}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button className="AlterHip" onClick={onAlterHipOpen}>
                  얼터너티브
                </Button>
                <CommonModal
                  isOpen={isAlterHipOpen}
                  onClose={onAlterHipClose}
                  title="얼터너티브"
                >
                  <AlterHipModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={AlterHip === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={AlterHip}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button
                  className="RageHip"
                  onClick={onRageHipOpen}
                  style={{ padding: '0px 30px' }}
                >
                  레이지
                </Button>
                <CommonModal
                  isOpen={isRageHipOpen}
                  onClose={onRageHipClose}
                  title="레이지"
                >
                  <RageHipModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={RageHip === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={RageHip}
                />
              </Box>
            </HStack>
          </Box>
          <Box className="first_box" w="800px">
            <HStack spacing={4} align="center">
              <div className="Sub">
                <Button onClick={onBoomHipOpen} style={{ padding: '0px 37px' }}>
                  붐뱁
                </Button>
                <CommonModal
                  isOpen={isBoomHipOpen}
                  onClose={onBoomHipClose}
                  title="붐뱁"
                >
                  <BoomHipModalBody />
                </CommonModal>
              </div>
              <Box flex="1">
                <ProgressBar
                  bgColor={BoomHip === maxProgress ? '#D6FF32' : 'white'}
                  baseBgColor="rgb(37, 37, 103)"
                  labelColor="black"
                  completed={BoomHip}
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
                <img src="/hip_m1.jpg" id="albumcover" />
                <div id="song">
                  DIOR
                  <br />
                  <span>Pop Smoke</span>
                </div>
                <img src="/19.png" id="prohibit3" />
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67Ma9DKt1sslE4gieQcTHhRwr')
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
                <img src="/hip_m2.jpg" id="albumcover" />
                <div id="song">
                  Mask Off
                  <br />
                  <span>Future</span>
                </div>
                <img src="/19.png" id="prohibit1" />
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MYL6EFzJvB0MR0L5mJIwLFf')
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
                <img src="/hip_m3.jpg" id="albumcover" />
                <div id="song">
                  Bound 2<br />
                  <span>Kanye West</span>
                </div>
                <img src="/19.png" id="prohibit3" />
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MZyq1Ry3FaRHdmkcI6f5BHK')
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
                <img src="hip_m4.webp" id="albumcover" />
                <div id="song">
                  Miss The Rage
                  <br />
                  <span>Trippie Redd</span>
                </div>
                <img src="/19.png" id="prohibit1" />
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MbKaetJvGbjuo194EI9OfXi')
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
                <img src="hip_m5.webp" id="albumcover" />
                <div id="song">
                  Hypnotize
                  <br />
                  <span>B.I.G.</span>
                </div>
                <img src="/19.png" id="prohibit1" />
                <div class="play">
                  <img
                    onClick={() =>
                      (window.location.href =
                        'https://www.youtube.com/playlist?list=PLCqnvhwU67MaSwB65jkuc1vDC0BWsmpRv')
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

export default Hip;
