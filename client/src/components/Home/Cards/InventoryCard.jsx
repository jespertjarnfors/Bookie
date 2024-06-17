import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

const InventoryCard = ({ title, quantity, iconSrc, bgColor }) => {
  return (
    <Card sx={{
      backgroundColor: bgColor,
      width: '15.7rem',
      height: '5.5rem',
      display: "flex",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", 
    }}>
      <CardHeader
        avatar={<Avatar color="primary" sx={{ width: 60, height: 60, backgroundColor: bgColor, marginRight: "0" }}>{iconSrc}</Avatar>}
        title={<div style={{ fontSize: '1rem', fontFamily: 'Poppins', fontWeight: '500', color: 'white' }}>{title}</div>}
        subheader={<div style={{ fontSize: '1.1rem', fontFamily: 'Poppins', fontWeight: '500', color: 'white' }}>{quantity}</div>}
        style={{
          padding: "15px"
        }}
      />
    </Card>
  );
};

export default InventoryCard;
