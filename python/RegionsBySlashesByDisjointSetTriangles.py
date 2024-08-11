from typing import List


class Solution:
    def region_by_slashes(self, grid: List[str]) -> int:
        grid_size = len(grid)
        total_triangles = grid_size * grid_size * 4

        parent_array = [-1] * total_triangles

        region_count = total_triangles

        for row in range(grid_size):
            for col in range(grid_size):
                if row > 0:
                    region_count -= self._union_triangles(parent_array,
                                                          self._get_triangle_index(grid_size, row - 1, col, 2),
                                                          self._get_triangle_index(grid_size, row, col, 0),
                                                          )

                if col > 0:
                    region_count -= self._union_triangles(parent_array,
                                                          self._get_triangle_index(grid_size, row, col - 1, 1),
                                                          self._get_triangle_index(grid_size, row, col, 3),
                                                          )

                if grid[row][col] != '/':
                    region_count -= self._union_triangles(parent_array,
                                                          self._get_triangle_index(grid_size, row, col, 0),
                                                          self._get_triangle_index(grid_size, row, col, 1),
                                                          )
                    region_count -= self._union_triangles(parent_array,
                                                          self._get_triangle_index(grid_size, row, col, 2),
                                                          self._get_triangle_index(grid_size, row, col, 3),
                                                          )

                if grid[row][col] != '\\':
                    region_count -= self._union_triangles(parent_array,
                                                          self._get_triangle_index(grid_size, row, col, 0),
                                                          self._get_triangle_index(grid_size, row, col, 3)
                                                          )
                    region_count -= self._union_triangles(parent_array,
                                                          self._get_triangle_index(grid_size, row, col, 2),
                                                          self._get_triangle_index(grid_size, row, col, 1)
                                                          )

        return region_count



    def _get_triangle_index(self, grid_size, row, col, triangle_number):
        return (grid_size * row + col) * 4 + triangle_number

    def _union_triangles(self, parent_array, x, y):
        parent_x = self._find_parent(parent_array, x)
        parent_y = self._find_parent(parent_array, y)

        if parent_x != parent_y:
            parent_array[parent_x] = parent_y
            return 1
        return 0

    def _find_parent(self, parent_array, x):
        if parent_array[x] == -1:
            return x
        parent_array[x] = self._find_parent(parent_array, parent_array[x])
        return parent_array[x]


