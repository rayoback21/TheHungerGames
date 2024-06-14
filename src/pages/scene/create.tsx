import { Create, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";

export const SceneCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};