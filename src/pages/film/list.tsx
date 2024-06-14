import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

// Define la interfaz para los datos de la tabla
interface Film {
  id: string;
  title: string;
  director: string;
  duration: number;
  release_date: string; 
  genre: string;
  box_office: string; 
  rating: number; 
  summary: string; 
}

export const FilmList = () => {
  const { tableProps } = useTable<Film>({
    syncWithLocation: true,
  });

  return (
    <div style={{ backgroundImage: 'url(Hunger-Games.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column<Film> dataIndex="id" title={"ID"} />
          <Table.Column<Film> dataIndex="title" title={"Title"} />
          <Table.Column<Film> dataIndex="director" title={"Director"} />
          <Table.Column<Film> dataIndex="duration" title={"Duration"} />
          <Table.Column<Film> dataIndex="release_date" title={"Release Date"} />
          <Table.Column<Film> dataIndex="genre" title={"Genre"} />
          <Table.Column<Film> dataIndex="box_office" title={"Box Office"} />
          <Table.Column<Film> dataIndex="rating" title={"Rating"} />
          <Table.Column<Film> dataIndex="summary" title={"Summary"} />
          <Table.Column<Film>
            title={"Actions"}
            dataIndex="actions"
            render={(_, record) => (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <ShowButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </div>
  );
};
