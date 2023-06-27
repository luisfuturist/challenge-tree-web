import { DataNode } from "antd/es/tree";
import * as React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { treeData } from "../data/tree";
import { findTreeNode } from "../utils/tree";

export type StoreState = {
  gData: DataNode[];
  setGData: (gData: DataNode[] | ((prev: DataNode[]) => DataNode[])) => void;
  updateItemTitle: (key: React.Key, title: string) => void;

  selectedKeys: React.Key[];
  setSelectedKeys: (keys: React.Key[]) => void;
  expandedKeys: React.Key[];
  setExpandedKeys: (
    keys: React.Key[] | ((prev: React.Key[]) => React.Key[])
  ) => void;
};

const defaultData = treeData;

export const useTreeStore = create(
  persist<StoreState>(
    (set, get) => ({
      gData: defaultData,
      setGData: (gData) =>
        set(() => {
          if (typeof gData === "function") {
            return { gData: gData(get().gData) };
          }

          return { gData };
        }),
      updateItemTitle: (key, title) => {
        set(() => {
          const prev = get().gData;
          const updatedTree = [...prev];

          findTreeNode(updatedTree, key, (nodeData: DataNode) => {
            nodeData.title = title;
          });
          
          return { gData: updatedTree };
        });
      },
      selectedKeys: ["0-0"],
      setSelectedKeys: (selectedKeys) => set(() => ({ selectedKeys })),
      expandedKeys: ["0-0", "0-0-0", "0-0-0-0"],
      setExpandedKeys: (expandedKeys) =>
        set(() => {
          if (typeof expandedKeys === "function") {
            return { expandedKeys: expandedKeys(get().expandedKeys) };
          }

          return { expandedKeys };
        }),
    }),
    { name: "tree" }
  )
);
