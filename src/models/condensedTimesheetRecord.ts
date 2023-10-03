import { z } from "zod";

const condensedTimesheetRecordSchema = z.object({
  id: z.string().trim(),
  username: z.string().trim(),
  startDatetime: z.string().trim(),
  endDatetime: z.string().trim().optional(),
  totalTime: z.string().trim().optional(),
  status: z.string().trim(),
  comments: z.string().trim().optional(),
});

type CondensedTimesheetRecord = z.infer<typeof condensedTimesheetRecordSchema>;

const isCompleteCondensedTimesheetRecord = (
  record: CondensedTimesheetRecord
): record is Required<CondensedTimesheetRecord> => {
  return record.endDatetime != null && record.totalTime != null;
};

export {
  type CondensedTimesheetRecord,
  condensedTimesheetRecordSchema,
  isCompleteCondensedTimesheetRecord,
};
