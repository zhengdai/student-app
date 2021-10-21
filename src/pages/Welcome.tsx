import React, {useState} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Modal } from 'antd';
import { useIntl, history } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  // const intl = useIntl();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleOk = () => {
    setIsModalVisible(false);
    const tablePath = '/list';
    history.push(tablePath);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    history.push('/user/login');
  };

  return (
    <PageContainer>
      <Modal title="确认您的信息" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="开始学习">
        <p>年级：21级</p>
        <p>专业：大数据</p>
        <p>兴趣：编程</p>
      </Modal>
      {/*<Card>*/}
      {/*  <Alert*/}
      {/*    message={intl.formatMessage({*/}
      {/*      id: 'pages.welcome.alertMessage',*/}
      {/*      defaultMessage: 'Faster and stronger heavy-duty components have been released.',*/}
      {/*    })}*/}
      {/*    type="success"*/}
      {/*    showIcon*/}
      {/*    banner*/}
      {/*    style={{*/}
      {/*      margin: -12,*/}
      {/*      marginBottom: 24,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Typography.Text strong>*/}
      {/*    <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '}*/}
      {/*    <a*/}
      {/*      href="https://procomponents.ant.design/components/table"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      target="__blank"*/}
      {/*    >*/}
      {/*      <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />*/}
      {/*    </a>*/}
      {/*  </Typography.Text>*/}
      {/*  <CodePreview>yarn add @ant-design/pro-table</CodePreview>*/}
      {/*  <Typography.Text*/}
      {/*    strong*/}
      {/*    style={{*/}
      {/*      marginBottom: 12,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}*/}
      {/*    <a*/}
      {/*      href="https://procomponents.ant.design/components/layout"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      target="__blank"*/}
      {/*    >*/}
      {/*      <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />*/}
      {/*    </a>*/}
      {/*  </Typography.Text>*/}
      {/*  <CodePreview>yarn add @ant-design/pro-layout</CodePreview>*/}
      {/*</Card>*/}
    </PageContainer>
  );
};
