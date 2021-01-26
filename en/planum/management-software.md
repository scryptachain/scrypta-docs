# Management software

## Planum Admin Tool
To administer a Planum sidechain you can use the following tool:

[https://github.com/scryptachain/scrypta-planum-admin](https://github.com/scryptachain/scrypta-planum-admin)

This tool allows you to create a desktop application to safely manage a sidechain in terms of KYC, fund management and statistics analysis.

Warning: this tool is extremely basic, simply allowing you to write down identifiers, send funds and withdraw them. Any other functionality can be developed later.

## Check functionality

To check the correct functionality of the sidechain at IdANodes, you can use the following tool:

[https://github.com/scryptachain/scrypta-planum-check-service](https://github.com/scryptachain/scrypta-planum-admin)

To configure it, connect the desired sidechain through the `.env` file and start the control via the `npm start` command.

This tool will check that the supply is identical in all available IdANodes. If not, it will ask IdANode to carry out a check on the sidechain itself.