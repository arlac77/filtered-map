import test from "ava";
import { FilteredMap } from "filtered-map";

test("map basics", t => {
  const m1 = new Map([
    ["k1", 1],
    ["k2", 2]
  ]);
  const fm = new FilteredMap(m1, item => item > 1);

  t.is(fm.size, 1);
  t.is(`${fm}`, "[object Map]");

  t.deepEqual([...fm.entries()], [["k2", 2]]);

  t.deepEqual([...fm.keys()], ["k2"]);
  t.deepEqual([...fm.values()], [2]);

  fm.set("k3", 3);

  t.deepEqual([...fm.values()], [2, 3]);

  t.deepEqual(
    [...fm],
    [
      ["k2", 2],
      ["k3", 3]
    ]
  );

  t.is(fm.delete("k1"), false);
  t.is(fm.delete("k2"), true);

  t.deepEqual([...fm.values()], [3]);
});
