import counterReducer, {
  increment,
  decrement,
  reset,
} from "../store/counterSlice";

describe("counter reducer", () => {
  const initialState = { value: 0 };

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(-1);
  });

  it("should handle reset", () => {
    const actual = counterReducer(initialState, reset({ value: 5 }));
    expect(actual.value).toEqual(5);
  });
});
