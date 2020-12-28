from typing import List, Tuple
from collections import defaultdict


def park_benches(benches: List[Tuple[int, int]], dist: int) -> List[Tuple[int, int]]:
    memo = defaultdict(list)

    def search(rest, tgt_coord, benches):
        if m := memo[tgt_coord]:
            return benches + m

        new_benches = list(benches)
        for i, (coord, length) in enumerate(rest):
            if coord - tgt_coord >= dist:
                new_benches_1 = search(rest[i + 1:], coord + length, benches + [(coord, length)])
                new_benches_2 = search(rest[i + 1:], tgt_coord, benches)
                if sum(nb1[1] for nb1 in new_benches_1) > sum(nb2[1] for nb2 in new_benches_2):
                    new_benches = new_benches_1
                else:
                    new_benches = new_benches_2
                break
        memo[tgt_coord] = new_benches[len(benches):]
        return new_benches

    return search(benches, -dist, [])
