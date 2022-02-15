import React from 'react';
import Link from 'next/link';

function linkAddress(template: string, row: any) {
  // e.g. /documents/[id]  =>  /documents/4
  const linkRegEx = /\[([a-z0-9]+)\]/i;
  const colMatch = template.match(linkRegEx);
  if (!colMatch) {
    return template;
  }
  return template.replace(colMatch[0], row[colMatch[1]]);
}

interface TableProps {
  columns: any[];
  rows: any[];
}

const Table = ({ columns, rows }: TableProps) => {
  return (
    <div className="flex flex-col mr-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.title}
                      scope="col"
                      align={col.align || 'left'}
                      className="px-4 py-3 text-xs font-medium  uppercase tracking-wider"
                    >
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200">
                {rows.map((row, i) => (
                  <tr key={i}>
                    {columns.map((col) => (
                      <td key={col.title} align={col.align} className="px-4 py-4 text-sm">
                        {!col.href ? (
                          row[col.data]
                        ) : (
                          <Link href={linkAddress(col.href, row)} passHref={true}>
                            <a className="text-skin-base hover:text-skin-base-hover">{row[col.data]}</a>
                          </Link>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
