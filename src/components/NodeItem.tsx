import { HolderOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { DataNode } from "antd/es/tree";
import type { ChangeEventHandler } from "react";
import { useTreeStore } from "../stores/useTreeStore";

type NodeItemProps = {
  data: DataNode;
};

const NodeItem = ({ data: nodeData }: NodeItemProps) => {
  const updateItemTitle = useTreeStore((state) => state.updateItemTitle);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateItemTitle(nodeData.key, e.target.value);
  };

  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <HolderOutlined className="cursor-move" />

      <Input
        value={nodeData.title as string}
        onChange={handleChange}
        bordered={false}
      />
    </div>
  );
};

export default NodeItem;
