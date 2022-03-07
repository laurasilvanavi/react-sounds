import { Button } from '@mui/material';
import './Instrument.css';
import { Synth } from 'tone'
import { GAMMA_NOTES } from '../../constants/notes'

const keyStyles = {
  paddingTop: '4em',
  paddingBottom: '4em',
  width: '5em'
};

const synth = new Synth().toDestination();

export const Instrument = () => {
  function playNote(note: string) {
    synth.triggerAttackRelease(note, "8n");
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