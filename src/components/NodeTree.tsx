import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Tree } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { shallow } from "zustand/shallow";
import { useTreeStore } from "../stores/useTreeStore";
import { moveItem } from "../utils/tree";
import NodeItem from "./NodeItem";

const NodeTree: React.FC = () => {
  const [gData, setGData] = useTreeStore(
    (state) => [state.gData, state.setGData],
    shallow
  );
  const [expandedKeys, setExpandedKeys] = useTreeStore(
    (state) => [state.expandedKeys, state.setExpandedKeys],
    shallow
  );
  const [selectedKeys, setSelectedKeys] = useTreeStore(
    (state) => [state.selectedKeys, state.setSelectedKeys],
    shallow
  );

  const handleDragEnter: TreeProps["onDragEnter"] = (info) => {
    setExpandedKeys(info.expandedKeys);
  };

  const handleDrop: TreeProps["onDrop"] = (info) => {
    const data = [...gData];

    moveItem(data, { ...info });

    setGData(data);
  };

  const handleSelect: TreeProps["onSelect"] = (selectedKeys) => {
    setSelectedKeys(selectedKeys);
  };

  const handleExpand: TreeProps["onExpand"] = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
  };

  const renderTitle = (nodeData: DataNode) => <NodeItem data={nodeData} />;

  return (
    <Tree
      className="w-full"
      treeData={gData}
      showLine={true}
      titleRender={renderTitle}
      switcherIcon={
        <Button
          shape="circle"
          type="secondary"
          size="small"
          icon={<CaretDownOutlined />}
        />
      }
      draggable={true}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      expandedKeys={expandedKeys}
      onExpand={handleExpand}
      selectedKeys={selectedKeys}
      onSelect={handleSelect}
    />
  );
};

export default NodeTree;
