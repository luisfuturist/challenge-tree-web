import type { DataNode } from "antd/es/tree";

export const treeData: DataNode[] = [
  {
    title: "Welcome",
    key: "0-0",
    children: [
      {
        title: "node 1",
        key: "0-1",
        children: [
          {
            title: "node 1.1",
            key: "0-1-1",
            children: [
              {
                title: "node 1.1.1",
                key: "0-1-1-1",
                children: [
                  {
                    title: "node 1.1.1.1",
                    key: "0-1-1-1-1",
                  },
                ],
              },
            ],
          },
          {
            title: "node 1.2",
            key: "0-1-2",
          },
        ],
      },
      {
        title: "node 2",
        key: "0-2",
        children: [
          {
            title: "node 2.1",
            key: "0-2-1",
          },
        ],
      },
      {
        title: "node 3",
        key: "0-3",
        disabled: true,
      },
    ],
  },
];