import type { DataNode } from "antd/es/tree";
import * as React from "react";

export const findTreeNode = (
  data: DataNode[],
  key: React.Key,
  cb: (node: DataNode, i: number, data: DataNode[]) => void
) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].key === key) {
      return cb(data[i], i, data);
    }
    if (data[i].children) {
      findTreeNode(data[i].children!, key, cb);
    }
  }
};

export type ItemMoveInfo = {
  node: any;
  dragNode: any;
  dropPosition: number;
  dropToGap: boolean;
};

export const moveItem = (data: DataNode[], info: ItemMoveInfo) => {
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPos = info.node.pos.split("-");
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

  let dragObj: DataNode;
  findTreeNode(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });

  const isOnTheBottom = dropPosition === 1;
  const isExpanded = info.node.props.expanded;
  const hasChildren = (info.node.props.children || []).length > 0;

  if (!info.dropToGap) {
    findTreeNode(data, dropKey, (item) => {
      item.children = item.children || [];
      item.children.unshift(dragObj);
    });
  } else if (hasChildren && isExpanded && isOnTheBottom) {
    findTreeNode(data, dropKey, (item) => {
      item.children = item.children || [];
      item.children.unshift(dragObj);
    });
  } else {
    let ar: DataNode[] = [];
    let i: number;

    findTreeNode(data, dropKey, (_item, index, arr) => {
      ar = arr;
      i = index;
    });

    if (dropPosition === -1) {
      ar.splice(i!, 0, dragObj!);
    } else {
      ar.splice(i! + 1, 0, dragObj!);
    }
  }
};
