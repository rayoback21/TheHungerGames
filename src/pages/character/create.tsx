import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const CharacterCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label={"Name"} name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Actor Name"} name="actor_name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Age"} name="age" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Gender"} name="gender" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Role"} name="role" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Biography"} name="biography">
          <Input />
        </Form.Item>
        <Form.Item label={"Film ID"} name="film_id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};