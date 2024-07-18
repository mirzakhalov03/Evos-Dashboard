import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const MenuCard = ({ recipe }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={recipe.name} src={recipe.image} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={recipe.name}
        description={`Cuisine: ${recipe.cuisine} | Meal Type: ${recipe.mealType} | Rating: ${recipe.rating}`}
      />
    </Card>
  );
}

export default MenuCard;
