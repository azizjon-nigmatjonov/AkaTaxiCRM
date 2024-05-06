import { useEffect, useRef, useState } from "react";
import CModal from "../../../../../../components/CElements/CModal";
import {
  PauseCircleFilledRounded,
  PlayCircleFilledWhiteRounded,
  RestartAltRounded,
} from "@mui/icons-material";
import PlayButton from "./PlayButton";
import usePageRouter from "../../../../../../hooks/useObjectRouter";

const formWaveSurferOptions = (ref: any) => ({
  container: ref,
  waveColor: "#EFF8FF",
  progressColor: "#2E90FA",
  cursorColor: "white",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 40,
  normalize: true,
  partialRender: true,
});

export const AudioModal = () => {
  const [playing, setPlaying] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer: any = useRef(null);
  const { navigateQuery } = usePageRouter();

  const create = async () => {
    const WaveSurfer: any = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load("/m.mp3");
  };

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
    wavesurfer.current.playPause();
  };
  const resetAudio = () => {
    // setPlaying(false);
    // wavesurfer.current.pause();
    wavesurfer.current.seekTo(0);
  };

  useEffect(() => {
    create();
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  return (
    <CModal
      title="Yozib olingan audio"
      open={true}
      handleClose={() => navigateQuery({ modal: "", user_id: "" })}
      footerActive={false}
      minWidth="700px"
    >
      <div className="flex items-center justify-between">
        <div className="space-x-3">
          <PlayButton handleClick={() => resetAudio()}>
            <RestartAltRounded style={{ color: "#2E90FA", fontSize: "30px" }} />
          </PlayButton>

          <PlayButton handleClick={() => handlePlayPause()}>
            {playing ? (
              <PauseCircleFilledRounded
                style={{ color: "#2E90FAbb", fontSize: "30px" }}
              />
            ) : (
              <PlayCircleFilledWhiteRounded
                style={{ color: "#2E90FAbb", fontSize: "30px" }}
              />
            )}
          </PlayButton>
        </div>
        <div className="relative my-4 w-[80%]">
          <div className="w-full">
            <div id="waveform" ref={waveformRef} />
          </div>
        </div>
      </div>
    </CModal>
  );
};
