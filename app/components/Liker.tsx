import { HeartIcon } from '@heroicons/react/24/solid';
import React, { Component } from 'react';

interface LikerProps {}

interface LikerState {
  count: number;
  clicked: boolean;
}

class Liker extends Component<LikerProps, LikerState> {
  state: LikerState = {
    count: 42,
    clicked: false, 
  };

  componentDidMount() {
    // Retrieve count from localStorage if available
    const savedCount = localStorage.getItem('likersCount');
    if (savedCount) {
      this.setState({ count: parseInt(savedCount, 10) });
      
    }
  }

  increase = (): void => {

    const { clicked } = this.state;
    if (!clicked) {
      this.setState(
        (prevState) => ({
          count: prevState.count + 1,
          clicked: true,
        }),
        () => {
          sessionStorage.setItem('likersCount', this.state.count.toString());
          sessionStorage.setItem('likersClicked', JSON.stringify(true));
          localStorage.setItem('likersCount', this.state.count.toString());
        }
      );
    }
  }

  render() {
    const { count, clicked } = this.state;

    return (
      <div className='md:text-[15px] xxs:text-[12px] '>
        <button
          type='button'
          onClick={this.increase}
          className={`md:px-[2px] cursor-pointer mt-3 sm:py-[2px] md:h-4 md:w-4 xxs:w-3  xxs:mr-[1px] ${clicked ? 'text-red-500' : 'text-blue'}`}
        >
          <HeartIcon />
        </button>
        {count}
      </div>
    );
  }
}

export default Liker;

