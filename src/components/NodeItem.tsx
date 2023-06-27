import { HolderOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import type { DataNode } from "antd/es/tree";
import * as React from "react";
import { ChangeEventHandler, useState } from "react";
import { useTreeStore } from "../stores/useTreeStore";
import { addItemToTree } from "../utils/tree";

type NodeItemProps = {
  data: DataNode;
};

const NodeItem = ({ data: nodeData }: NodeItemProps) => {
  const setGData = useTreeStore((state) => state.setGData);
  const updateItemTitle = useTreeStore((state) => state.updateItemTitle);
  const setExpandedKeys = useTreeStore((state) => state.setExpandedKeys);
  const setSelectedKeys = useTreeStore((state) => state.setSelectedKeys);

  const [hover, setHover] = useState<React.Key | null>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateItemTitle(nodeData.key, e.target.value);
  };

  const handleAdd = (nodeData: DataNode) => {
    setGData((prev) => {
      const updatedTree = [...prev];

      const key = nodeData.title + "." + ((nodeData.children || []).length + 1);

      setSelectedKeys([key]);
      setExpandedKeys((prev) => [...prev, key]);

      const newItem = { key, title: key };

      addItemToTree(updatedTree, nodeData.key, newItem);

      return updatedTree;
    });
  };

  return (
    <div
      className="flex items-center justify-between gap-2 p-2"
      onMouseEnter={() => setHover(nodeData.key)}
      onMouseLeave={() => setHover(null)}
    >
      <HolderOutlined className="cursor-move" />

      <Input
        value={nodeData.title as string}
        onChange={handleChange}
        bordered={false}
      />

      {hover === nodeData.key && (
        <div className="flex gap-2">
          <Button
            shape="circle"
            icon={<PlusOutlined />}
            size={"medium"}
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              handleAdd(nodeData);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NodeItem;
