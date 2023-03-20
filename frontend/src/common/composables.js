import { computed } from 'vue';
import { getTimeAgo } from './helpers';

export const useTaskCardDate = (task) => {
    console.log('task', task);
    return computed(() => {
        return `# ${task.id} создана ${getTimeAgo(task.dueDate)}`;
    });
};
