import React from 'react';
import { connect } from 'react-redux';
import { decrease, increase, reset, modalOpen } from './actions';

function Counter({ name, count, increase, decrease, reset, modalOpen }) {
  return (
    <div className='container'>
      <h1>counter</h1>
      <h2>{name}</h2>
      <p className='counter'>{count}</p>
      <div className='buttons'>
        <button type='button' className='btn' onClick={decrease}>
          decrease
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            reset();
            modalOpen(
              'susan',
              '     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, libero reiciendis. Veritatis iure accusantium obcaecati nostrum voluptas, rem minus nisi.'
            );
          }}
        >
          reset
        </button>
        <button type='button' className='btn' onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
}
function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}

export default connect(mapStateToProps, {
  increase,
  reset,
  decrease,
  modalOpen,
})(Counter);
