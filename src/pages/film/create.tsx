import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const FilmCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label={"Title"} name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Director"} name="director" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Duration"} name="duration" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Release Year"} name="release_year" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Genre"} name="genre" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Language"} name="language" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Country"} name="country" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={"Synopsis"} name="synopsis">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};