import { decrement, increment } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}
