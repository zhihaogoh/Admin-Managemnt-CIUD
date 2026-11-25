import { Flex, Progress } from "antd";

export default function ProgressStatus() {
  return (
    <>
      <Flex gap="small" vertical>
        <Progress percent={100}  showInfo={false}/>
      </Flex>
    </>
  );
}
