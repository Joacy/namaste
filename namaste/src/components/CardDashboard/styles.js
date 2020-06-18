import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 20px;
    height: 150px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 0px #787878;

    .header {
        display: flex;
        justify-content: space-between;

        .infos {
            h5 {
                color: #787878;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 12px;
                font-weight: 700;
                margin-bottom: 15px;
            }
            
            h3 {
                color: #009d70;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 24px;
                font-weight: 500;
            }
        }
        
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 56px;
            height: 56px;
            background: #b772b9;
        }
    }
`;
