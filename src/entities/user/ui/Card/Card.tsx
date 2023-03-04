import { Card, CardBody } from "@chakra-ui/react";

import { useUserStore } from "../../model";
import { getUserName, getUserToken } from "../../model/selectors";

export const ViewerCard = () => {
  const email = useUserStore(getUserName);
  const token = useUserStore(getUserToken);

  return (
    <Card>
      <CardBody>
        {token} {email}
      </CardBody>
    </Card>
  );
};