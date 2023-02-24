import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";

export default function TodoTable({
  ownerData,
}) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">name</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">dogs owned</Typography>
            </Th>

          </Tr>
        </Thead>

        <Tbody>
          {ownerData.map((owner) => {

            return (
              <Tr key={owner.id}>
                <Td>
                  <Typography textColor="neutral800">{owner.id}</Typography>
                </Td>

                <Td>
                    <Typography textColor="neutral800">{owner.name}</Typography>
                </Td>
                <Td>
                    <Typography textColor="neutral800">
                        <div>
                            {owner.dogs.map((dog) => {
                                
                                return(
                                    <div key={dog.id}>
                                        <div>{dog.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </Typography>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}