/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: XaseflCipJaSt8sMDr3nQEADwPNuHxfT2M6qN3SC+WpGKdH0weroeDzMeKw2c5U9vdhCSvnM2fxDib2CCSU5SQ==
 */

/* eslint-disable */
// tslint:disable

interface Connections {
  /**
   * @default nextval('connections_connection_id_seq'::regclass)
   */
  connection_id: number & {readonly __brand?: 'connections_connection_id'}
  user_id: (number) | null
}
export default Connections;

interface Connections_InsertParameters {
  /**
   * @default nextval('connections_connection_id_seq'::regclass)
   */
  connection_id?: number & {readonly __brand?: 'connections_connection_id'}
  user_id?: (number) | null
}
export type {Connections_InsertParameters}
