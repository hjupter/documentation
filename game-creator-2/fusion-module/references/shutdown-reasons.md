# Shutdown Reasons

Describes a list of Reason why the Fusion Runner was Shutdown

* **`Ok:`** means Fusion was Shutdown by request
* **`Error:`** Shutdown was caused by some internal error
* **`IncompatibleConfiguration:`** Raised when the peer tries to Join a Room with a mismatching type between ClientServer Mode and Shared Mode.
* **`ServerInRoom:`** Raised when the local peer started as a Server and tried to join a Room that already has a Server peer.
* **`DisconnectedByPluginLogic:`** Raised when the Peer is disconnected or kicked by a Plugin Logic.
* **`GameClosed:`** Raised when the Game the Peer is trying to Join is Closed
* **`GameNotFound:`** Raised when the Game the Peer is trying to Join does not exist
* **`InvalidRegion:`** Raised when the peer is trying to connect to an unavailable or non-existent Region
* **`GameIdAlreadyExists:`** Raised when a Session with the same name was already created
* **`GameIsFull:`** Raised when a peer is trying to join a Room with already the max capacity of players
* **`InvalidAuthentication:`** Raised when the Authentication Values are invalid
* **`CustomAuthenticationFailed:`** Raised when the Custom Authentication has failed for some other reason
* **`AuthenticationTicketExpired:`** Raised when the Authentication Ticket has expired
* **`PhotonCloudTimeout:`** Timeout on the Connection with the Photon Cloud
* **`AlreadyRunning:`** Raised when Fusion is already running and the StartGame is invoked again
* **`InvalidArguments:`** Raised when any of the StartGame arguments does not meet the requirements
* **`HostMigration:`** Signal this Runner is shutting down because of a Host Migration is about to happen
* **`ConnectionTimeout:`** Connection with a remote server failed by timeout
* **`ConnectionRefused:`** Connection with a remote server failed because it was refused
* **`OperationTimeout:`** The current operation has timed out
* **`OperationCanceled:`** The current operation was canceled
