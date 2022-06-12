import { Input } from 'antd';

const { Search } = Input;


function SearchField({
    onSearch=null,
    width="",
    placeholder=""
}) {
  return (
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      style={{ width: width }}
      
    />
  );
}

export default SearchField;
