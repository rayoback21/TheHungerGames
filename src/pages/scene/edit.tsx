import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";

export const SceneEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});
  const sceneData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item label={"Description"} name="description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Cost"} name="cost" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Actor"} name="actor" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Stock"} name="stock" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Date Shot"} name="dateShot" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label={"Scene ID"} name="scene_id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};