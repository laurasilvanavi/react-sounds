import { Button } from '@mui/material';
import './Instrument.css';
import { Synth, Volume, Sampler, Destination } from 'tone'
import { GAMMA_NOTES } from '../../constants/notes'

const CatSample = require("../../assets/cat-sample.mp3");

const keyStyles = {
  paddingTop: '4em',
  paddingBottom: '4em',
  width: '5em'
};

const synth = new Synth().toDestination();
const mediumVolume = new Volume(-15);
const sampler = new Sampler({
  G2: CatSample,
}).chain(mediumVolume, Destination);

export const Instrument = () => {
  function playNote(note: string) {
    synth.triggerAttackRelease(note, "8n");
    sampler.triggerAttack(note);
  }

  return (
    <div className="Instrument">
      <div>
        {GAMMA_NOTES.map(note => (
          <Button onClick={() => playNote(note)} key={note} sx={keyStyles}>♪ {note}</Button>
        ))}
      </div>
    </div>
  );
}