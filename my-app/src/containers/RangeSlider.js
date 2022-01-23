import '../containers/RengeSlider.scss';
import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import RangeSliderOut from '../components/RangeSliderOut';

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue1: 100.00,
            textValue2: 5000.00
          };
          this.onSlide = (render, handle, value,no, percent) => {
            this.setState({
              textValue1: value[0].toFixed(2),
              textValue2: value[1].toFixed(2)
            });
          };
      }

  render() {

    const { textValue1,  textValue2} = this.state;
    return (
      <div> 
        <RangeSliderOut textValue1={textValue1} textValue2={textValue2}/>
        <Nouislider
          connect
          start={[100, 5000]}
          behaviour="tap"
          range={{
            min: [100],
            '1.68%': [50, 50],
            max: [5000]
          }}
          onSlide={this.onSlide}
        />
      </div>
    );
  }
}

export default RangeSlider;