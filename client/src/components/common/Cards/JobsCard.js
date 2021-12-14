import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from "styled-components";
import SettingsIcon from '@mui/icons-material/Settings';

const { Meta } = Card;

export default function componentName({ toggleModal, job }) {

    const styles = {
        card: {

        },
        icons: {

        },
        cardHeader: {
            fontFamily: 'Heebo, sans-serif',
            color: 'grey',
        }
    }

    return (
        <>
            <CustomCard
                style={{ width: 350 }}
                // cover={

                //     // <img
                //     //     alt="example"
                //     //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                //     // />
                // }
                actions={[
                    // <SettingsIcon key="setting" style={styles.icons} />,
                    <CustomSettingOutlined key="setting" style={styles.icons} />,
                    <CustomEditOutlinedOutlined key="edit" onClick={() => toggleModal(job)} />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    style={styles.cardHeader}
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={job.title}
                    description=""
                />
                <CardContent>{job.body}</CardContent>
                <CardSubTitle>Unilever Nigeria</CardSubTitle>
            </CustomCard>

        </>
    );
}


const CustomCard = styled(Card)`
border-radius: 10px;
box-shadow: 7px 2px 5px 0px rgba(0,0,0,0.33);
-webkit-box-shadow: 7px 2px 5px 0px rgba(0,0,0,0.33);
-moz-box-shadow: 7px 2px 5px 0px rgba(0,0,0,0.33);
font-size: 1.1em;
font-family: 'Nunito Sans', sans-serif;

&:hover{
    transform: scale(1.1, 1.1);
    z-index: 100;
}

`;

const CardContent = styled.div`
    padding-top: 20px;
    text-align:  justify ;
    font-style: none;
`

const CardSubTitle = styled.div`
    text-align:  justify ;
    font-weight: 600;
    color: grey;
    padding-top: 20px ;
    font-style: italic;
`

const CustomSettingOutlined = styled(SettingsIcon)`
    background:none ;
    border-radius: 10px;

    :hover {
    box-shadow: 3px 2px 3px 0px rgba(0,0,0,0.22);
-webkit-box-shadow: 3px 2px 3px 0px rgba(0,0,0,0.22);
-moz-box-shadow: 3px 2px 3px 0px rgba(0,0,0,0.22);
    }

`
const CustomEditOutlinedOutlined = styled(EditOutlined)`
    background:none ;
    border-radius: 10px;

    :hover {
    box-shadow: 3px 2px 3px 0px rgba(0,0,0,0.22);
-webkit-box-shadow: 3px 2px 3px 0px rgba(0,0,0,0.22);
-moz-box-shadow: 3px 2px 3px 0px rgba(0,0,0,0.22);
    }

`