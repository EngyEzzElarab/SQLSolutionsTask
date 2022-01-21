import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const SearchByCity = () => 
{
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

return(
    <Space direction="vertical">
        <Search placeholder="Search By City e.g Cairo" onSearch={(e)=>onSearch(e)} enterButton />
    </Space>

    );
    }
export default SearchByCity;