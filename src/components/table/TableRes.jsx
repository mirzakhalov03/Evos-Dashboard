import { IoMdAdd } from "react-icons/io"; 
import { AiFillStar } from "react-icons/ai"; 
import { Table, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const TableRes = ({ data, loading, isMenuSection = false }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch(); 
    const addedRecipeIds = useSelector(state => state.addedRecipeIds);


    const success = (recipe) => {
      messageApi.success('Recipe added successfully');
      dispatch({ type: "ADD_RECIPE", user: recipe });
  };
  

    const columns = [
        {
            title: 'No.',
            dataIndex: 'id',
            key: 'id', 
        },
        {
            render: (item) => <img style={{ width: 80, height: 80, borderRadius: 10 }} src={item} alt="" />,
            title: 'Image',
            dataIndex: 'image',
            key: 'image', 
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name', 
        },
        {
            title: 'Cuisine',
            dataIndex: 'cuisine',
            key: 'cuisine', 
        },
        {
            title: 'Meal Type',
            dataIndex: 'mealType',
            key: 'mealType', 
        },
        {
            title: 'Rating',
            render: (item) => <>{<AiFillStar style={{ color: 'orange'}}/>} {item.rating}</>,
            key: 'rating', 
        },
        {
          title: 'Action',
          render: (recipe) => <>
              {contextHolder}
              {
                  isMenuSection ? null : (
                      addedRecipeIds.includes(recipe.id) ? (
                          <Button disabled style={{backgroundColor: '#d3d3d3'}} shape="round" type="primary">
                              <IoMdAdd />Added
                          </Button>
                      ) : (
                          <Button onClick={() => success(recipe)} style={{backgroundColor: '#309b42'}} shape="round" type="primary">
                              <IoMdAdd />Add to Menu
                          </Button>
                      )
                  )
              }
          </>,
          key: 'action',
      }
      
    ];

    return (
        <Table dataSource={data.map((item) => ({...item, key: item.id}))} columns={columns} loading={loading} key={data.id}  />
    );
}

export default TableRes;
