import React, { useState } from 'react';

function AutoSlice() {
    const colors = ['diep', 'huong', 'trang']
    const delay = 1500;
  
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index, colors.length]);
    
    return (
      <div className={colors[index]}>
        <div>.</div>
      </div>
    );
  }
  
  export default AutoSlice;