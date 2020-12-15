import React from 'react';
import * as Tone from 'tone';


function Seq(props) {

  const synth = new Tone.Synth();
  const filter = new Tone.Filter(7500, 'lowpass', -24)
  const delay = new Tone.FeedbackDelay(.5, .5);
  const dist = new Tone.Distortion(0);
  const notes = ["D3", "F3", "A3", "C4", "D4", "E4", "G4", "A4"];
  let index = 0;
  var vol = new Tone.Volume(-12).toDestination();


  delay.wet.value = 0;
  delay.gain = 1;
  synth.oscillator.type = "square";
  synth.chain(dist, filter, delay, vol)
  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.bpm.value = 90

  

  function repeat(time) {
    let stepCount = index % 7;

    Tone.Draw.schedule(function(){      
      activeLine(stepCount);
    }, time)

    // console.log(stepCount)
    // props.triggerActiveLine(stepCount+1)
    // pentFlash(false);
    // const row1 = document.getElementById('row1');
    // let input = row1.querySelector(`div:nth-child(${stepCount+1}) input[id=c${stepCount+1}]`);
    // // var stepSliders = [
    // //   document.getElementById("step1"),
    // //   document.getElementById("step2"),
    // //   document.getElementById("step3"),
    // //   document.getElementById("step4"),
    // //   document.getElementById("step5"),
    // //   document.getElementById("step6"),
    // //   document.getElementById("step7"),
    // //   document.getElementById("step8")
    // // ];    
    console.log(props.currentStep[stepCount])
    if (props.currentStep[stepCount]) {
      // pentFlash(true);
      synth.triggerAttackRelease(notes[1], '32n', time);
    }
    index++;
    // stepVisual(stepCount,row1);
  }

  function activeLine(stepCount) {
    let line = document.getElementById(`s${stepCount+1}`);  
    let glow = document.getElementById(`sg${stepCount+1}`);    
    line.setAttribute("fill", "#00d848")  
    glow.setAttribute("fill", "#00d848")    
    setTimeout(function() {
      line.setAttribute("fill", "#1f1f1f")
      glow.setAttribute("fill", "black")
    }, 200);
  }

  function startSeq() {
    Tone.start();
    Tone.Transport.start();
  }

  function stopSeq() {
    Tone.Transport.stop();
    
  }

  window.onload = function () {
    var volumeSlide = document.getElementById('volume');
    volumeSlide.addEventListener("change", function () {
      console.log(this.value)
      console.log(vol.volume.value)
      vol.volume.value = this.value - 35;
      console.log(vol.volume.value)
    });
    var filterSlide = document.getElementById('filter');
    filterSlide.addEventListener("change", function () {
      filter.frequency.value = this.value * 100;
    });
    var releaseSlide = document.getElementById('release');
    releaseSlide.addEventListener("change", function () {
      synth.envelope.release = this.value / 2;
    });
    var distortionSlide = document.getElementById('distortion');
    distortionSlide.addEventListener("change", function () {
      dist.distortion = this.value / 10;
    });
    var delaySlide = document.getElementById('delay');
    delaySlide.addEventListener("change", function () {
      delay.wet.value = this.value / 10;
    });
  }


  return (
    <React.Fragment>

      <button className="btn btn-success" onClick={startSeq}>start</button>
      <button className="btn btn-danger" onClick={stopSeq}>stop</button>
      <div className="container controlBox">
        <p>VOLUME<input type="range" min="0" max="35" defaultValue="10" className="slider" id="volume" /></p>
        <p>FILTER<input type="range" min="0" max="100" defaultValue="75" className="slider" id="filter" /></p>
        <p>RELEASE<input type="range" min="0" max="30" defaultValue="5" className="slider" id="release" /></p>
        <p>DISTORTION<input type="range" min="0" max="30" defaultValue="0" className="slider" id="distortion" /></p>
        <p>DELAY<input type="range" min="0" max="10" defaultValue="0" className="slider" id="delay" /></p>
      </div>


    </React.Fragment>
  )

}


export default Seq;